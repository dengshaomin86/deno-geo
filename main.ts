Deno.serve((req) => {
    // 1. 获取边缘节点注入的地理位置 (Deno Deploy 提供)
    const city = req.headers.get("cf-ipcity") || "神秘城市";
    const country = req.headers.get("cf-ipcountry") || "未知国度";

    // 2. 模拟一个简单的个性化逻辑
    // 如果是来自美国，背景设为蓝色；中国设为红色；其他设为灰色
    const bgColor = country === "CN" ? "#ff4d4f" : country === "US" ? "#1890ff" : "#555";

    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>我的边缘节点应用</title>
      </head>
      <body style="background: ${bgColor}; color: white; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh;">
        <div style="text-align: center;">
          <h1>你好，来自 ${city} (${country}) 的朋友！</h1>
          <p>这段代码是在离你最近的边缘节点上瞬间跑出来的。</p>
          <small>时间: ${new Date().toLocaleString()}</small>
        </div>
      </body>
    </html>
  `;

    return new Response(html, {
        headers: { "content-type": "text/html; charset=utf-8" },
    });
});
