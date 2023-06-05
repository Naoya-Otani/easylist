import React from "react";
import Heading from "../../parts/common/Heading";
import HeadingSm from "../../parts/common/HeadingSm";
import HeadingXs from "../../parts/common/HeadingXs";
import Table from "../../parts/common/Table";
import ListEcon from "../../parts/courses/ListEcon";
import Table3col from "../../parts/common/Table3col";
import ListEcon2 from "../../parts/courses/ListEcon2";

const Economics = () => {
  return (
    <div className="outlineStyle font-notoSans">
      <div className="my-8">
        <Heading heading="履修の組み方　経済学部" />
      </div>
      <div className="mb-4">
        <div className="my-4">
          <HeadingSm heading="1年生" />
        </div>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          2年への進級条件は24単位以上取得していることのみですが、履修申告の際はフル単申請(48単位申請)が基本です。基本的に経済学部の１年の必修は、クラスにより先生が指定されています。
          経済学部１年の
          <a
            href="https://www.students.keio.ac.jp/hy/class/registration/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            時間割
          </a>
          の２ページを閲覧すると分かるかと思います。
          クラスが発表されるまでは履修は組めません。
        </p>
        <div className="my-4">
          <HeadingXs heading="必修" />
        </div>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          ○の中の数字は単位数です。
          フランス語は第二外国語の例として挙げています。
        </p>
        <div className="lg:flex lg:justify-around space-y-8 lg:space-y-0 mb-8">
          <Table
            head={["Aタイプ　春学期", "Aタイプ　秋学期"]}
            items={[
              {
                th: "study skills(週２コマ) ②",
                td: "英語セミナー(週２コマ) ②",
              },
              { th: "フランス語 Ⅰ a ①", td: "フランス語 Ⅰ b ①" },
              { th: "フランス語 Ⅱ a ①", td: "フランス語 Ⅱ b ①" },
              { th: "フランス語 Ⅲ a ①", td: "フランス語 Ⅲ b ①" },
              { th: "マクロ経済学初級 Ⅰ ②", td: "マクロ経済学初級 Ⅱ ②" },
              { th: "統計学 Ⅰ ②", td: "統計学 Ⅱ ②" },
              { th: "線形代数 ②", td: " - " },
              { th: " - ", td: "微分積分 ②" },
            ]}
            thBold={false}
          />
          <Table
            head={["Bタイプ　春学期", "Bタイプ　秋学期"]}
            items={[
              {
                th: "study skills(週２コマ) ②",
                td: "英語セミナー(週２コマ) ②",
              },
              { th: "フランス語 Ⅰ a ①", td: "フランス語 Ⅰ b ①" },
              { th: "フランス語 Ⅱ a ①", td: "フランス語 Ⅱ b ①" },
              { th: "フランス語 Ⅲ a ①", td: "フランス語 Ⅲ b ①" },
              { th: "マクロ経済学初級 Ⅰ ②", td: "マクロ経済学初級 Ⅱ ②" },
              { th: "統計学 Ⅰ ②", td: "統計学 Ⅱ ②" },
              { th: "日本経済概論(春or秋) ②", td: " - " },
              { th: "歴史的経済分析の視点(春or秋) ②", td: " - " },
            ]}
            thBold={false}
          />
        </div>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          英語セミナー以外はクラスごとに先生が指定されています。英語セミナーは抽選による事前エントリーが必要です。秋学期の英語セミナーは、中級/上級のレベルが自分で選べるうえに、先生も自分で選べます。もちろん人気なら抽選。ここまでで、22単位ですね。
          さて、次に埋めるのは選択科目と言われるものです。これは必修じゃないから取らなくても良いのですが、2年生以降の授業についていくために、一般的な一年生ならみんな履修します。卒業単位認定科目になります。タイプAは先生が選べません。タイプBは先生を選ぶことができます。タイプAは数学概論の履修はできません。数学が得意なタイプBはタイプAに交じって授業を受けることになります。数学不得意なタイプBが1年で数学概論を履修して、2年で微分積分(入門)・線形代数(続論)を履修するとかもできます。
        </p>
        <div className="my-4">
          <HeadingXs heading="選択科目" />
        </div>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          ○の中の数字は単位数です。
        </p>
        <div className="lg:flex lg:justify-around space-y-8 lg:space-y-0 mb-8">
          <Table
            head={["Aタイプ　春学期", "Aタイプ　秋学期"]}
            items={[
              { th: " - ", td: "線形代数続論 ②" },
              { th: "微分積分入門 ②", td: " - " },
            ]}
            thBold={false}
          />
          <Table
            head={["Bタイプ数弱　春学期", "Bタイプ数弱　秋学期"]}
            items={[
              { th: "数学概論 Ⅰ ②", td: " - " },
              { th: "数学概論 Ⅱ ②", td: " - " },
            ]}
            thBold={false}
          />
          <Table
            head={["Bタイプ数強　春学期", "Bタイプ数強　秋学期"]}
            items={[
              { th: "線形代数 ②", td: "線形代数続論 ②" },
              { th: "微分積分入門 ②", td: "微分積分 ②" },
            ]}
            thBold={false}
          />
        </div>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          そうするとタイプAと数学不得意なタイプBは4単位履修したことになるので、ここまでで計26単位。数学得意なタイプBは8単位履修したことになるから、ここまでで計30単位になりますね。
          さあ、タイプAと数学不得意なタイプBの残りは、48-26=22単位です。
          数学得意なタイプBの残りは48-30=18単位です。
          残りは先生が選べるので、ここで
          <span className="font-bold"> 楽単リストの登場 </span>
          です。その残りは以下の3点です。
        </p>
        <ListEcon />
        <div className="my-4">
          <HeadingXs heading="総合教育科目" />
        </div>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          総合教育科目(一般教養)は卒業するまでに20単位以上取る必要があり、三田ではあまり開講されないので、1・2年の間に履修するのが一般的です。どれがⅠ系かⅡ系かⅢ系かは、経済学部1年
          の
          <a
            href="https://www.students.keio.ac.jp/hy/class/registration/"
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            時間割
          </a>
          を見れば分かります。
        </p>
        <Table
          head={["系列", "単位数"]}
          items={[
            { th: "Ⅰ系（自然科学・数理科学）", td: "6単位以上" },
            { th: "Ⅱ系（社会科学・人文科学）", td: "10単位以上" },
            { th: "Ⅲ系（少人数形式）", td: "0単位以上" },
            { th: "合計", td: "20単位以上" },
          ]}
          thBold={true}
        />
        <div className="my-4">
          <HeadingXs heading="卒業単位認定科目" />
        </div>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          簡単にいうとなんでも卒業単位として認めてもらえる枠で16単位までです。先ほどの選択科目に加えて、体育・情報処理・タイプAがタイプBの必修(日本経済概論・歴史的経済分析の視点)を取る場合・総合教育科目(一般教養)の超過分などが含まれます。ただし体育は6単位まで。
        </p>
        <div className="my-4">
          <HeadingXs heading="特殊科目" />
        </div>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          藤田教授の金融リテラシーは抽選になるくらい楽単で、内容も生きて行くうえで役立つ情報がたくさんあります。特殊科目の意味は分からなくてよいです。別に履修しなくても大丈夫です。
        </p>
      </div>
      <div className="mb-4">
        <div className="my-4">
          <HeadingSm heading="2年生" />
        </div>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          2年生は1年間過ごして、ある程度は要領を掴めたと思うので、少し簡略化します。まずは必修です。クラス指定がある必修はミクロ経済学と経済史のみです。この2つだけはクラス指定があります。逆にいえば、あとは自由ということです。ゼミで成績を見るところはミクロの成績が大事になります。また、ミクロを分かっていれば三田で相当楽ができます。
        </p>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          次に、質問の多い語学です。1年の語学は上記の方法で10単位取得した前提で話を進めます。
          簡潔にいうと4単位取得すれば良いです。一般的なパターンは以下の4つに限られます。
          ※フランス語は第２外国語、イタリア語は第３外国語という意味です。○の中は単位数になります。
        </p>
        <Table3col
          head={["パターン", "授業 1", "授業 2"]}
          items={[
            {
              th: "パターンA",
              td1: "英語セミナー ②",
              td2: "フランス語Ⅳa・Ⅳb ②",
            },
            {
              th: "パターンB",
              td1: "英語リーディング ②",
              td2: "フランス語Ⅳa・Ⅳb ②",
            },
            {
              th: "パターンC",
              td1: "イタリア語Ⅰa・Ⅰb ②",
              td2: "イタリア語Ⅱa・Ⅱb ②",
            },
            {
              th: "パターンD",
              td1: "フランス語Ⅳa・Ⅳb ②",
              td2: "フランス語Ⅳa・Ⅳb ②",
            },
          ]}
          thBold={false}
        />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          語学は通年で4コマということです。語学が週5コマあった1年と比べて雲泥の差くらい楽ですね。
        </p>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          <span className="font-bold">経済数学Ⅰ・Ⅱ</span>
          は、役に立つかは、津曲教授のミクロ経済学中級で経済数学の基礎を学んでいると、理解が深まってより楽しめるようになる程度です。三田大学でミクロ経済学中級を4つのS評価とA評価でコンプリートした経験から、桂田教授と森藤教授の経済数学Ⅰ・Ⅱが分かりやすく、おススメです。ただし、微分積分や線形代数の知識は必須となります。
        </p>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          <span className="font-bold">経済数学Ⅲ</span>
          では、ミクロ経済学の厚生経済学第2定理に必要な凸集合の分離定理を証明することを目標としています。集合と位相を基礎から学び、三田の須田教授が担当する数理経済学Ⅰa・Ⅰbの内容とオーバーラップするため、役に立つことがあります。また、ベクトルや線形代数の基礎知識が必要となります。なお、授業では板書が早いため、注意してください。
        </p>
        <div className="my-4">
          <HeadingXs heading="何単位申請するべきか" />
        </div>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          進級条件の一部を思い出しましょう。
        </p>
        <Table3col
          head={["学年", "該当学年単位数", "累計単位数"]}
          items={[
            {
              th: "1年",
              td1: "24単位以上",
              td2: " - ",
            },
            {
              th: "2年",
              td1: " - ",
              td2: "60単位以上",
            },
            {
              th: "3年",
              td1: "28単位以上",
              td2: " - ",
            },
            {
              th: "4年",
              td1: "12単位以上",
              td2: "126単位以上",
            },
          ]}
          thBold={false}
        />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          いずれにせよ、3・4年で28+12=40単位取るため、1・2年で126-40=86単位取得しておけばオッケーな訳です。それ以上取得しても
          <span className="font-bold">無駄になります</span>
          。従って世間では、 「
          <span className="font-bold">経済学部は日吉ではMax86単位</span>」
          と呼ばれています。なので、1年でフル単申請でフル単したならば、86-48=38単位申請すればよいわけです。
        </p>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          ちなみに、三田は就職活動と並行することから楽単が多めなので、86単位取れなくても気にする必要はありません。
        </p>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          よく「三田に持っていける単位」や特殊科目って何？という質問があります。それについては、以下に記述することを最後まで閲覧していただければ解決すると思います。
          86単位取得したいと仮定しましょう。
        </p>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          1年の必修は上記の通り、22単位ありました。2年の必修は上記の通り、語学が4単位、ミクロ経済学で4単位、経済史で4単位、選択必修で4単位なので、計16単位ありました。ここまでで、22+16=38単位です。まだまだ86単位には届きませんね。
        </p>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          次に、一般教養を見ていきましょう。20単位とありましたね。これで、ここまでで38+20=58単位です。
        </p>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          さらに、卒業単位認定科目を見ていきましょう。微分積分入門・線形代数続論・数学概論・情報処理・体育・一般教養の20単位を超えた分など、だいたい何でもオッケーの枠のことですね。上限は16単位です。従って、ここまでで58+16=74単位になります。※もちろん、三田でこの卒業単位認定科目の枠を埋めても構いません。
        </p>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          しかし、86-74=12単位、まだ足りません。これ以上、一般教養を履修しても、卒業単位として認定されないし……
        </p>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          お待たせしました。ここで出てくるのが、俗にいう「三田に持っていける科目」です。それは何かといいますと、
        </p>
        <ListEcon2 />
        <p className="text-black my-8 px-4 text-sm lg:text-lg">
          こちらになります。　以上です。
        </p>
        <div className="my-4">
          <HeadingXs heading="特殊科目" />
        </div>
        <p className="text-black mb-8 px-4 text-sm lg:text-lg">
          特殊科目についても触れておきます。
          <span className="font-bold">簿記</span>
          は、高田さんは分かりやすく３～２級までやってしっかり身に着けるタイプで、中村さんは３級だけやってＣなら簡単に単位がくるタイプです。
          <span className="font-bold">確率論入門</span>
          は計量経済学概論と比較すると説明がしやすいかもしれません。計量経済学概論が、統計学の回帰分析を深堀して分析手法を学んだり考察したりするのに対し、確率論入門は統計学の理論よりで、ポアソン分布や指数分布の数学的な成り立ちなどをやるので、微分積分の知識が必要です。
          <span className="font-bold">解析学入門</span>
          については、一般的にはデータの解析と混同されがちですが、解析学は微分積分の理論を指します。この科目では、位相数学を使って微分可能性や積分可能性を厳密に証明することを学びます。基礎から学ぶ科目で、ε-δ論法などが出てくるため、苦手な人は履修しない方が良いかもしれません。
        </p>
      </div>
    </div>
  );
};

export default Economics;
