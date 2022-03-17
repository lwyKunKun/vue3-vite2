/**
 * @description 配置i18n国际化
 * @author lwy
 *
 */

import { createI18n } from "vue-i18n/index";

import { getLanguage } from "@/utils/cookies";

import elementEnLocale from "element-plus/lib/locale/lang/en";
import elementZhLocale from "element-plus/lib/locale/lang/zh-cn";

// User defined lang
import enLocale from "./lang/en";
import zhLocale from "./lang/zh-cn";

const messages = {
    en: {
        ...enLocale,
        ...elementEnLocale,
    },
    "zh-cn": {
        ...zhLocale,
        ...elementZhLocale,
    },
};

export const getLocale = () => {
    //先在cookie里面去找是否存了语言，如果有就返回cookie里面的值
    const cookieLanguage = getLanguage();
    if (cookieLanguage) {
        return cookieLanguage;
    }
    //如果是首次登录，执行下面的逻辑
    const language = navigator.language.toLowerCase(); //navigator.language代表用户的首先语言，通常是浏览器使用的语言。toLowerCase()小写

    //Object.keys 获取对象的属性，返回一个数组
    const locales = Object.keys(messages); // ['en', 'zh-cn']
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            // indexOf：可返回某个指定的字符串值在字符串中首次出现的位置。如果要检索的字符串值没有出现，则该方法返回 -1。
            return locale;
        }
    }

    return "zh";
};

const i18n = createI18n({
    locale: getLocale(),
    messages: messages,
});

export default i18n;