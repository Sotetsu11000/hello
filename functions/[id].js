export async function onRequest(context) {
    const id = context.params.id
    const html = "<!DOCTYPE html><html lang='ja'><head><meta charset='UTF-8' /><title>" + id + "</title></head><body><h1>Hello!</h1><h2>やあ！入力したIDは" + id + "です！</h2></body></html>"
    return new Response(html, {
        headers: {
            "Content-Type": "text/html; charset=UTF-8"
        }
    })
}