import { HandlerContext } from "$fresh/server.ts";

const GGEZ = [
  "みんな最高だ！",
  "みんな、ナイスゲーム！",
  "すごい楽しかったよ！ナイスゲーム！",
  "ナイスゲーム！みんなこれからも頑張ってね！",
  "みんな、さすがだね",
  "お見事！みんなさすがだね",
  "仲間たちに栄光と名誉あれ！",
  "一緒にプレイできて光栄です！ありがとう",
  "うん、やっぱ楽しくプレイすることが何よりも大事だよね",
  "誰かに抱きしめられたい気分...",
  "誰か...抱きしめてくれないかな...",
  "はー、ちょっと嫌な事があったりもしたけど...みんなとプレイ出来て楽しかったよ",
  "もうおネンネの時間は過ぎてるけど...お母さんには内緒だよ",
  "いいでしょ、お母さん！あと5分だけやらせてよ！あ、間違えた",
  "お母さんには、人の嫌がることはやっちゃダメって教わったんだ",
];

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const randomIndex = Math.floor(Math.random() * GGEZ.length);
  const body = GGEZ[randomIndex];
  return new Response(body);
};