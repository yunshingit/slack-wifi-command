export default {
  async fetch(request, env, ctx) {
    return new Response(JSON.stringify({
      response_type: "ephemeral",
      text: `*#01*\n네트워크 이름: Maria-Guest\n비밀번호: \`mariababy\`\n\n*#02*\n네트워크 이름: Moffice\n비밀번호: \`dsdvp3363\`\n\n*#03*\n네트워크 이름: moffice\n비밀번호: \`dsdvp3363\`\n\n*#04* (신동윤의 맥미니가 인터넷 공유 제공할 때만 사용 가능)\n네트워크 이름: 신동윤의 겁나빠른 wifi\n비밀번호: \`dockingiss\``
    }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
