// API de Conversões da Meta (server-side). Recebe o evento do navegador e repassa à Meta
// com o mesmo event_id do Pixel, para a Meta deduplicar. Token em META_CAPI_TOKEN (segredo do Pages).
const PIXEL = "1930502218306155";
const PERMITIDOS = ["PageView", "ViewContent", "InitiateCheckout"];

export async function onRequestPost({ request, env }) {
  let b;
  try { b = await request.json(); } catch { return new Response(null, { status: 400 }); }
  if (!PERMITIDOS.includes(b.event_name) || !b.event_id || !env.META_CAPI_TOKEN) return new Response(null, { status: 204 });
  const user_data = {
    client_ip_address: request.headers.get("CF-Connecting-IP") || undefined,
    client_user_agent: request.headers.get("User-Agent") || undefined,
    fbp: b.fbp || undefined,
    fbc: b.fbc || undefined,
  };
  const ev = {
    event_name: b.event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: String(b.event_id).slice(0, 64),
    action_source: "website",
    event_source_url: String(b.url || "").slice(0, 500),
    user_data,
  };
  if (b.value) ev.custom_data = { value: Number(b.value), currency: "BRL", content_name: "Devocional BPA" };
  const r = await fetch(`https://graph.facebook.com/v21.0/${PIXEL}/events?access_token=${env.META_CAPI_TOKEN}`, {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ data: [ev] }),
  });
  return new Response(null, { status: r.ok ? 204 : 502 });
}
