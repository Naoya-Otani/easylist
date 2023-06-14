import Heading from "../../parts/common/Heading";
import HeadingSm from "../../parts/common/HeadingSm";
import Table from "../../parts/common/Table";
import Table3col from "../../parts/common/Table3col";
import HeadingXs from "../../parts/common/HeadingXs";
import ListLawpol from "../../parts/courses/ListLawpol";

const Lawpolitics = () => {
  return (
    <div className="outlineStyle font-notoSans">
      <div className="my-8">
        <Heading heading="履修の組み方　法学部政治学科" />
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
              td2: " - ",
            },
            {
              th: "3年",
              td1: "30単位以上",
              td2: " - ",
            },
            {
              th: "4年",
              td1: " - ",
              td2: "136単位以上",
            },
          ]}
          thBold={false}
        />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          法学部政治学科の進級条件は至ってシンプルで、毎年30単位以上取って、卒業時には136単位以上取ればいいだけです。ただし、理由は後述しますが、1年生は44～48単位申請が基本となるでしょう。
          ※インテンシブは48～52単位申請が基本です。
          では、履修組み始めていきます。クラスが発表されないと新入生は履修が組めません！まずはクラスごとに授業が指定されている必修から埋めていきます。クラス指定の授業は法学部法律学科１年の
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
          <HeadingXs heading="必修" />
        </div>
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          ○の中の数字は単位数です。
        </p>
        <Table
          head={["春学期", "秋学期"]}
          items={[
            {
              th: "社会科学科目",
              td: " - ",
            },
            { th: "社会学（2コマ連続）④", td: "経済原論 Ⅰ（2コマ連続）④" },
            { th: "法学（2コマ連続）④", td: "憲法（2コマ連続）④" },
            { th: "英語第Ⅰ ①", td: "英語第Ⅰ ①" },
            { th: "フランス語第Ⅰ（週2コマ）", td: "フランス語第Ⅱ（週2コマ）" },
            { th: "外国語 1", td: " - " },
            { th: "外国語 2", td: " - " },
            { th: "政治学科目（基礎科目）", td: " - " },
            { th: "政治学基礎 ②", td: " - " },
          ]}
          thBold={false}
        />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          上記の授業はクラスによって先生が指定されています。経済原論Ⅱは2年春の必修です。
          さて、次に事前エントリーして決めないといけないのは、英語第Ⅱです。英語第Ⅱは第Ⅰと違って先生を選ぶことが可能で、基本は通年で先生が一緒です。楽単リストをうまく活用して楽な先生を選んで欲しいと思います。
        </p>
        <Table
          head={["春学期", "秋学期"]}
          items={[
            { th: "外国語 1", td: " - " },
            { th: "英語第Ⅱ ①", td: "英語第Ⅱ ①" },
          ]}
          thBold={false}
        />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          ここまでで計26単位です。英語も第2外国語も週2コマが基本で、通年で各4単位。ただし、インテンシブは、その科目は週4コマが基本で、通年で8単位となります。従って、ここまでで計30単位となります。
        </p>
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          次に埋めるのは選択必修です。政治学科目(基礎科目)は8単位以上卒業するまでに履修しなくてはならず、必修の「政治学基礎」で既に2単位履修しているので、残りは8-2=6単位(３科目)分以上必要で、１年生で履修することが一般的です。
        </p>
        <div className="my-4">
          <HeadingXs heading="選択必修" />
        </div>
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          ○の中の数字は単位数です。
          ※いずれも半期で、以下の政治学科目（基礎科目）から6単位を推奨します。
        </p>
        <ListLawpol />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          上記の選択必修から6単位履修したと仮定すると、ここまでで26+6=32単位ですね。おさらいすると、
          下の表になっています。
        </p>
        <Table
          head={["選択必修", "単位数"]}
          items={[
            { th: "社会科学科目 ", td: "16単位" },
            { th: "外国語 1", td: "4単位" },
            { th: "外国語 2", td: "4単位" },
            { th: "政治学科目（基礎科目）", td: "8単位" },
          ]}
          thBold={false}
        />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          ※ただし、インテンシブは、外国語 1または外国語
          2が8単位になっていて、計36単位です。
        </p>
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          さて、あとの48-32=16単位は自由に選べます。ここは楽単リストの使いどころです。埋めるとすれば、人文科学科目か自然科学・数理・統計科目、もしくは自主選択科目からが一般的です。
          ところで、人文科学科目と自然科学・数理・統計科目はいわゆる一般教養のことです。自主選択科目はいわゆるなんでもオッケーの枠で、各項目の超過分や、体育・情報処理などがこれにあたり、28単位まで認められます。
        </p>
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          それで、それらから16単位履修すれば良いのですが、人文科学科目と自然科学・数理・統計科目は卒業までに各8単位以上必要で、日吉でしか開講されていないので、1・2年の間に履修しておくことが望ましいです。
        </p>
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          従って1年生は、人文科学科目と自然科学・数理・統計科目から8単位ずつ履修することをおすすめします。ただし、人によっては体育や情報処理を加えて、人文科学科目と自然科学・数理・統計科目を減らしても良いと思います。法政の履修の組み方は以上となります。
        </p>
      </div>
    </div>
  );
};

export default Lawpolitics;
