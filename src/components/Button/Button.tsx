import { View } from "@lib/decorators/View.decorator";

interface IProps {
    label: string;
    onClick?: () => void;
}

@View
class Button  {
    constructor(private readonly props: IProps) {}

    handleClick() {
        this.props.onClick()
    }

    render() {
        return <button onclick={this.handleClick.bind(this)}>{this.props.label}</button>;
    }
}

export default Button;