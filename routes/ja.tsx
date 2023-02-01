import { Head } from "$fresh/runtime.ts";
import MaskedGGEZ from "../islands/MaskedGGEZ.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>GGEZ API</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-lg">
        <h1 class="my-6 text-center text-5xl">GGEZ API</h1>
        <div class="font-semibold text-yellow-500 sm:text-2xl lg:text-4xl bg-gray-800 rounded p-5">
          <p class="mb-2">
            [リーパー]: <MaskedGGEZ lang="ja" />
          </p>
          <p class="mb-2">[あなた]: gg ezって言った?</p>
          <p>[あなた]: 変わってて草</p>
        </div>
        <p class="mt-5 mb-10 text-3xl leading-normal">
          GGEZ APIはOverWatchに影響を受けて作成されました。
          <br />
          OverWatchではプレイヤーが"gg ez"と発言しても、他のメッセージに置き換わります。
          このAPIではそれらのメッセージをランダムで提供します。
        </p>
        <div class="mb-5">
          <h2 class="text-4xl mb-2">対応言語</h2>
          <ul class="text-2xl list-disc list-inside">
            <li>英語</li>
            <li>日本語</li>
          </ul>
        </div>
        <div>
          <h2 class="text-4xl mb-2">エンドポイント</h2>
          <ul>
            <li>
              <code class="bg-gray-200 p-1">/api</code>
              <p>ランダムでメッセージが取得できます。メッセージは全ての言語を含みます。</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
