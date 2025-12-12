export async function onRequest(context) {
    const number = Math.floor(Math.random() * 100)
    const html = "<!DOCTYPE html><html lang='ja'><head><meta charset='UTF-8' /><title>テスト</title></head><body><h1>Hello!</h1><h2>やあ！これは動的ページのテストです！</h2><h3>ラッキーナンバー:" + number + "</h3></body></html>"
    return new Response(html, {
        headers: {
            "Content-Type": "text/html; charset=UTF-8"
        }
    })
}