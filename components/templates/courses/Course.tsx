import React from "react";
import Table from "../../parts/common/Table";
import Heading from "../../parts/common/Heading";
import ListSection from "../../parts/courses/ListSection";

const Courses = () => {
  return (
    <div className="outlineStyle font-notoSans">
      <div className="my-8">
        <Heading heading="履修の組み方" />
      </div>
      <div className="mb-4">
        <p className="mt-6 mb-8 px-2 text-sm lg:text-lg">
          クラスが決まるまで履修を組めないことに注意してください。
        </p>
        <ListSection />
      </div>
      <div className="mb-4">
        <div className="py-2">
          <Heading heading="単位の数え方" />
        </div>
        <p className="mt-6 mb-8 px-2 text-sm lg:text-lg">
          個人的には、実験系の科目（物・化・生）は2コマ3単位でコスパが悪いので、その他の自然科学の般教を選ぶのが良いと思っています。友達はできやすいので、その点は自分と相談するのが良さそうです。
        </p>
        <Table
          head={["カテゴリー", "単位"]}
          items={[
            { th: "体育実技", td: "半期1コマにつき1単位" },
            { th: "物理・化学・生物", td: "半期2コマにつき3単位" },
            { th: "語学", td: "半期1コマにつき1単位" },
            { th: "その他", td: "半期1コマにつき2単位" },
          ]}
          thBold={false}
        />
      </div>
      <div className="mb-4">
        <div className="py-2">
          <Heading heading="1年生の履修上限" />
        </div>
        <p className="mt-6 mb-8 px-2 text-sm lg:text-lg">
          上限は「取得」ではなく「履修」についてです。従って、春学期に履修したものの落単した科目を
          秋学期にその単位分を履修することはできません。取り消した場合はセーフです。
        </p>
        <Table
          head={["学部", "履修上限"]}
          items={[
            { th: "文学部", td: "52単位以内" },
            { th: "経済学部", td: "48単位以内" },
            { th: "法学部（通常）", td: "48単位以内" },
            { th: "法学部（インテンシブ）", td: "52単位以内" },
            { th: "商学部", td: "50単位以内" },
            { th: "理工学部", td: "54単位以内" },
          ]}
          thBold={false}
        />
      </div>
      <div className="mb-4">
        <div className="py-2">
          <Heading heading="卒業単位として認められる体育の単位数の上限" />
        </div>
        <Table
          head={["学部", "単位数"]}
          items={[
            { th: "文学部", td: "14単位" },
            { th: "経済学部", td: "6単位" },
            { th: "法学部法学科", td: "8単位" },
            { th: "法学部政治学科", td: "28単位" },
            { th: "商学部", td: "4単位" },
            { th: "理工学部", td: "2単位" },
          ]}
          thBold={false}
        />
      </div>
      <div className="mb-4">
        <div className="py-2">
          <Heading heading="授業の名前" />
        </div>
        <p className="mt-6 mb-8 px-2 text-sm lg:text-lg">
          授業の名前の後のⅠ・Ⅱやa・bに疑問を感じる方は多いと思います。
          これは開講学期を意味しています。
          語学以外は基本的に以下のようになっています。一般教養は片方だけ履修しても大丈夫です。
        </p>
        <Table
          head={["授業名", "意味"]}
          items={[
            { th: "Ⅰ・Ⅲ・a", td: "春学期" },
            { th: "Ⅱ・Ⅳ・b", td: "秋学期" },
          ]}
          thBold={false}
        />
      </div>
    </div>
  );
};

export default Courses;
