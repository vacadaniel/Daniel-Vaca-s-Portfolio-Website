class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            apppVersion: ''
        }
    }

    render(){
        return(
            <h2> Hello Friend! </h2>
    )
    }
}