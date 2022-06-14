import { Hello } from "../components/hello";

export default {
    title: 'component/HelloStorybook',
    component: Hello
}

export const HelloNhan = (): JSX.Element => {
    return (
        <Hello name="Nhan le"/>
    )
}