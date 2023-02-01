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
        <div class="font-semibold text-yellow-500 text-lg sm:text-xl md:text-2xl lg:text-4xl bg-gray-800 rounded p-5">
          <p class="mb-2">
            [Reaper]: <MaskedGGEZ lang="en" />
          </p>
          <p class="mb-2">[You]: Did you say "gg ez"?</p>
          <p>[You]: haha It's filtered!</p>
        </div>
        <p class="mt-5 mb-10 text-lg sm:text-xl md:text-3xl md:leading-normal">
          GGEZ API is inspired by OverWatch.
          <br />
          In OverWatch, if players try to say "gg ez", the saying is converted
          to various messages. This API provides the messages by random.
        </p>
        <div class="mb-5">
          <h2 class="text-4xl mb-2">Languages</h2>
          <ul class="text-2xl list-disc list-inside">
            <li>English</li>
            <li>Japanese</li>
          </ul>
        </div>
        <div>
          <h2 class="text-4xl mb-2">End Point</h2>
          <ul>
            <li>
              <code class="bg-gray-200 p-1">/api</code>
              <p>Get messages by random. The messages include all languages</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
