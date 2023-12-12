import * as fieldName from "./academicFieldName";

// 語学科目のフィールド名と言語名の対応
const faculties = [
  {
    id: 1,
    name: "文",
    secondLanguage: {
      fieldName: [fieldName.langOfLetters],
      langName: [
        "英語",
        "ドイツ語",
        "中国語",
        "スペイン語",
        "フランス語",
        "イタリア語",
        "ロシア語",
        "韓国語",
      ],
    },
  },
  {
    id: 2,
    name: "経済",
    secondLanguage: {
      fieldName: [fieldName.langOfEconomics],
      langName: ["英語", "ドイツ語", "中国語", "スペイン語", "フランス語"],
    },
  },
  {
    id: 3,
    name: "経済PEARL",
    secondLanguage: {
      fieldName: [fieldName.langOfPEARL],
      langName: [
        "英語",
        "日本語",
        "中国語",
        "ドイツ語",
        "スペイン語",
        "フランス語",
      ],
    },
  },
  {
    id: 4,
    name: "法法",
    secondLanguage: {
      fieldName: [fieldName.langOfLaw],
      langName: [
        "英語",
        "ドイツ語",
        "中国語",
        "スペイン語",
        "フランス語",
        "ロシア語",
        "朝鮮語",
        "アラビア語",
        "ラテン語",
        "ギリシャ語",
        "ポルトガル語",
      ],
    },
  },
  {
    id: 5,
    name: "法政",
    secondLanguage: {
      fieldName: [fieldName.langOfLaw],
      langName: [
        "英語",
        "ドイツ語",
        "中国語",
        "スペイン語",
        "フランス語",
        "ロシア語",
        "朝鮮語",
        "アラビア語",
        "ラテン語",
        "ギリシャ語",
        "ポルトガル語",
      ],
    },
  },
  {
    id: 6,
    name: "商",
    secondLanguage: {
      fieldName: [fieldName.langOfCommerce],
      langName: ["英語", "ドイツ語", "中国語", "スペイン語", "フランス語"],
    },
  },
  {
    id: 7,
    name: "理工",
    secondLanguage: {
      fieldName: [fieldName.langOfScience],
      langName: [
        "英語",
        "ドイツ語",
        "中国語",
        "ドイツ語",
        "フランス語",
        "朝鮮語",
      ],
    },
  },
];

export default faculties;
