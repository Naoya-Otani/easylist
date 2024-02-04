import React from "react";
import Heading from "../../parts/common/Heading";
import HeadingSm from "../../parts/common/HeadingSm";
import HeadingXs from "../../parts/common/HeadingXs";
import Table from "../../parts/common/Table";
import Table3col from "../../parts/common/Table3col";

const Commerce = () => {
  return (
    <div className="outlineStyle font-notoSans">
      <div className="my-8">
        <Heading heading="履修の組み方　商学部" />
      </div>
      <div className="mb-4">
        <div className="my-4">
          <HeadingSm heading="進級条件" />
        </div>
        <Table3col
          head={["学年", "該当学年単位数", "累計単位数"]}
          items={[
            {
              th: "1年",
              td1: "30単位以上",
              td2: " - ",
            },
            {
              th: "2年",
              td1: "30単位以上",
              td2: "70単位以上",
            },
            {
              th: "3年",
              td1: "12単位以上",
              td2: " - ",
            },
            {
              th: "4年",
              td1: "12単位以上",
              td2: "128単位以上",
            },
          ]}
          thBold={false}
        />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          以上が進級条件の表です。それを見た皆さんの中で、「じゃあ1・2年で頑張れば、3・4年で12+12=24単位だけ履修することもできるのか！」と思う方がいるかもしれません。しかし、履修しなければならない58単位分は三田でしか開講されていないので、それはできません。
          ということは、1・2年では、128-58=70単位より多く履修しても無駄になるんです。ところが、1・2年で70単位以上取得しないと留年になるので、ギリギリの申請は危ないので無駄ができます。コスパが悪いですね。また、(いくらキラ商といえども、)三田で就職活動と並行しながら、58単位取得するのはやや大変です。
          2年で必然的に30単位取得するということは、1年は70-30=40単位取得すればオッケーです。これより多く取得しても無駄になります。なので、1年は単位を落とすことを考えて40+αくらいの単位申請をすればオッケーとなります。抽選が外れることや、授業が難しそうだから取り消したりすることも考慮すると良いでしょう。
        </p>
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          では、履修組み始めていきます。クラスが発表されないと新入生は履修が組めません！まずはクラスごとに授業が指定されている必修から埋めていきます。クラス指定の授業は商学部１年の
          <a
            href="https://www.students.keio.ac.jp/hy/class/registration/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            時間割
          </a>
          を閲覧すると分かるかと思います。
        </p>
        <div className="my-4">
          <HeadingXs heading="必修　第二外国語" />
        </div>
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          ○の中の数字は単位数です。
        </p>
        <Table
          head={["春学期", "秋学期"]}
          items={[
            { th: "フランス語 Ⅰ a ①", td: "フランス語 Ⅰ b ①" },
            { th: "フランス語 Ⅱ a ①", td: "フランス語 Ⅱ b ①" },
          ]}
          thBold={false}
        />
        <div className="my-4">
          <HeadingXs heading="必修　基礎必修科目" />
        </div>
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          ○の中の数字は単位数です。
        </p>
        <Table
          head={["春学期", "秋学期"]}
          items={[
            { th: "経済学基礎 Ⅰ ②", td: "経済学基礎 Ⅱ ②" },
            { th: "経営学基礎（春か秋）②", td: " - " },
            { th: "商業学基礎（春か秋）②", td: " - " },
            { th: "会計学基礎 ②", td: " - " },
            { th: "微積分基礎 ②", td: "統計学基礎 ②" },
          ]}
          thBold={false}
        />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          よくある質問なんですが、微積分基礎は「一般入試B方式」と「それ以外」に分かれます。また、秋学期に開講されている微積分基礎はフォローアップクラスといって春学期に落単した人用なので、いまは関係ありません。また、基礎必修科目は、2年が終わるまでに14単位中12単位取得しなければならないので、1年で全部取得しておくことがおススメです。
          次に、授業が指定されるのは英語です。まず、TOEICでレベル分けのテストを受けて、レベルに応じた授業が指定されます。また、2019年度の1年の英語のレベル分けの基準は以下の通りです。
        </p>
        <p className="text-black font-bold my-8 px-4 text-sm lg:text-lg">
          英語リーディング
        </p>
        <Table
          head={["レベル", "点数"]}
          items={[
            { th: "基礎", td: "〜85点" },
            { th: "中級", td: "90〜340点" },
            { th: "準上級", td: "345〜395点" },
            { th: "上級", td: "400点〜" },
          ]}
          thBold={false}
        />
        <p className="text-black font-bold my-8 px-4 text-sm lg:text-lg">
          英語コミュニケーション
        </p>
        <Table
          head={["レベル", "点数"]}
          items={[
            { th: "基礎 ", td: "〜130点" },
            { th: "中級 ", td: "135〜345点" },
            { th: "準上級 ", td: "350〜445点" },
            { th: "上級 ", td: "450点〜" },
          ]}
          thBold={false}
        />
        <div className="my-8">
          <Table
            head={["春学期", "秋学期"]}
            items={[
              { th: "英語リーディングⅠ a ①", td: "英語リーディングⅠ b ①" },
              {
                th: "英語コミュニケーションⅠ a ①",
                td: "英語コミュニケーションⅠ b ①",
              },
            ]}
            thBold={false}
          />
        </div>

        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          ここまでで22単位です。以上の科目は先生が選べません。さて、残りの(40＋α)－22＝18単位は何で埋めるでしょう？それは、基礎選択科目と総合教育科目(一般教養)です。これは自由に選べますので楽単リストをうまく利用してください。
        </p>
        <div className="my-4">
          <HeadingXs heading="基礎選択科目" />
        </div>
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          ○の中の数字は単位数です。
        </p>
        <Table
          head={["春学期", "秋学期"]}
          items={[
            { th: "経済史 Ⅰ ②", td: "経済史 Ⅱ ②" },
            { th: " - ", td: "微積分 ②" },
            { th: "線形代数（春か秋） ②", td: " - " },
            { th: " -  ", td: "確率論 ②" },
            { th: "  -  ", td: "ゲーム理論基礎 ②" },
          ]}
          thBold={false}
        />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          ２年が終わるまでに、この中で経済史を除く４つ(微積分・線形代数・確率論・ゲーム理論基礎)の中から2単位以上取得しなければなりませんから、1年で何かしら1つ履修しておくのが良いと思います。そんな人いないでしょうが、理論上は12単位全部取得しても無駄にならず大丈夫です。
        </p>
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          あとは楽単リストが最も得意とする一般教養で埋めればよいだけです。基本的に1・2年で履修する単位ですが、卒業までに20単位以上履修しなければなりません。分野ごとに「類」というものがあり、卒業に必要な単位の内訳が決まっています。何の科目が何の類かは、商学部1年の
          <a
            href="https://www.students.keio.ac.jp/hy/class/registration/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            時間割
          </a>
          を閲覧してください。
        </p>
        <div className="my-4">
          <HeadingXs heading="総合教育科目" />
        </div>
        <Table
          head={["学類", "卒業までに必要な単位数"]}
          items={[
            { th: "Ⅰ類（自然科学系）", td: "6単位以上" },
            { th: "Ⅱ類（その他）", td: "0単位以上" },
            { th: "Ⅲ類", td: "0単位以上" },
            { th: "Ⅳ類", td: "0単位以上" },
            { th: "Ⅴ類（体育）", td: "0単位以上4単位以下" },
            { th: "合計", td: "20単位以上" },
            { th: "内、指定演習科目", td: "2単位以上" },
          ]}
          thBold={false}
        />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          指定演習科目とは、Ⅰ～Ⅳ類のうち、物理・化学・生物・総合教育セミナーなどの、少人数による演習形式のものです。詳しくは商学部の
          <a
            href="https://www.students.keio.ac.jp/hy/class/registration/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            履修案内
          </a>
          を読んでください。
        </p>
      </div>
    </div>
  );
};

export default Commerce;
