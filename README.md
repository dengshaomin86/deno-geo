# deno-geo
deno geo demo

## demo
```ts
// 直接使用 Deno 原生的 HTTP server
Deno.serve(async (req) => {
    // 1. 从请求头获取边缘节点自动注入的地理位置信息 (例如在 Cloudflare 或 Deno Deploy 中)
    const country = req.headers.get("cf-ipcountry") || "未知地区";
    const city = req.headers.get("cf-ipcity") || "远方";

    // 2. 构造响应逻辑
    const message = `你好！检测到你来自 ${country} 的 ${city}。这是由边缘节点直接处理的响应。`;

    return new Response(message, {
        headers: { "content-type": "text/plain; charset=utf-8" },
    });
});
```
