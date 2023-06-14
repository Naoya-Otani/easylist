import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Links = () => {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-2 font-notoSans">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-md bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>Twitter : @keio_easylist</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-yellow-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                リツイートで拡散にご協力お願いします。意見など連絡がありましたらDMお願いします。
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-md bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>Instagram : @keio_easylist</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-yellow-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                2021年以降のアンケートの結果はリアルタイムでこちらのスプレッドシートに反映されます。
                <br />
                楽単リストに情報を移したものは消すことがあります。
                <br />
                ※PC/アプリ推奨
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-md bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>Line : グループチャット</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-yellow-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                ゼミ情報・進級条件・語学など専門的なトークをするために学部ごとのオープンチャットも作成しました。
                <br />
                ※医学部・薬学部・SFCは人数が少ないため、学部のLINEグループが既に存在すると考えられるため作成しておりません。
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-md bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>楽単リスト集計結果</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-yellow-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                2021年以降のアンケートの結果はリアルタイムでこちらのスプレッドシートに反映されます。
                <br />
                楽単リストに情報を移したものは消すことがあります。
                <br />
                ※PC/アプリ推奨
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Links;
