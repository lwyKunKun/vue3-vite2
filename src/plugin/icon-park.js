/**
 * 字节跳动图标库：https://iconpark.oceanengine.com/official
 * and vue3 https://github.com/bytedance/IconPark/tree/master/packages/vue-next
 * element-plus icon: https://element-plus.gitee.io/#/zh-CN/component/icon
 * @description 图标库按需注册
 * @author lwy
 * @example <icon-user theme="outline" size="16" fill="#999" />
 * @example <el-icon :size="20"> <edit /> </el-icon>
 *
 * 字节跳动图标库属性：
 *
 * 一、theme：'outline'（default） | 'filled' | 'two-tone' | 'multi-color'
 * 二、size：number | string  default:'1em'
 * 三、spin(带有动画的旋转图标)：boolean default:false
 * 四、fill：string | string[]  default：'currentColor'
 * 五、strokeLinecap（SVG元素的中风线路）：'butt' | 'round'（default） | 'square'
 * 六、strokeLinejoin（SVG元素的中风线join prop）：'miter' | 'round'default） | 'bevel'
 * 七、strokeWidth（SVG元素的行程宽度道具）：number default:4
 */

// iconpark
import {
    User,
    Lock,
    Alipay,
    Wechat,
    Github,
    Twitter,
    Google,
    MenuUnfoldOne,
    MenuFoldOne,
    FullScreen,
    OffScreen,
    Refresh,
    Remind,
    AllApplication,
    Close,
    ToLeft,
    ToRight,
    Minus,
    Mail,
    Home,
    Code,
    ChartLine,
    Like,
    Xigua,
    Performance,
    Pic,
    MoveOne,
    Search,
    Tailoring,
    TailoringTwo,
    AddText,
    ScanCode,
    Play,
    PauseOne,
    VolumeNotice,
    VolumeMute,
    PlayCycle,
    PlayOnce,
    GoStart,
    GoEnd,
    MusicList,
    LinkCloudFaild,
    LinkInterrupt,
    Copy,
    ChartHistogram,
    MultiPictureCarousel,
    Theme,
    Translate,
} from "@icon-park/vue-next";
import "@icon-park/vue-next/styles/index.css";
// el-icon
// 所需的组件
export const components = [
    User,
    Lock,
    Alipay,
    Wechat,
    Github,
    Twitter,
    Google,
    MenuUnfoldOne,
    MenuFoldOne,
    FullScreen,
    OffScreen,
    Refresh,
    Remind,
    AllApplication,
    Close,
    ToLeft,
    ToRight,
    Minus,
    Mail,
    Home,
    Code,
    ChartLine,
    Like,
    Xigua,
    Performance,
    Pic,
    MoveOne,
    Search,
    Tailoring,
    TailoringTwo,
    AddText,
    ScanCode,
    Play,
    PauseOne,
    VolumeNotice,
    VolumeMute,
    PlayCycle,
    PlayOnce,
    GoStart,
    GoEnd,
    MusicList,
    LinkCloudFaild,
    Error,
    LinkInterrupt,
    Copy,
    ChartHistogram,
    MultiPictureCarousel,
    Theme,
    Translate,
];

import SvgIcon from "@/components/SvgIcon/index.vue";
// 注册
export default (app) => {
    app.component("svg-icon", SvgIcon);
    components.forEach((component) => {
        app.component(component.name.replace("icon-", ""), component); //去掉名字中的icon-前缀
    });
};