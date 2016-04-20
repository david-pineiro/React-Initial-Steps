var React = require('react');
var ReactDOM = require('react-dom');
var External = require('./js/PropsYState');

var Example1 = React.createClass({

    render: function() {
        return (
            <div>Hi!</div>
        );
    }
});

var Example2 = React.createClass({

    render: function() {
        return (
            <div>{this.props.msg}</div>
        );
    }
});

var Example1and2 = React.createClass({

    render: function() {
        return (
            <div>
                <Example1 />
                <Example2 msg="This is the example2 in example1and2!"/>
            </div>
        );
    }
});

var Example3 = React.createClass({

    getInitialState: function() {
        return ({text : 'Chan chan chan! ',
            newText: '',
            textToAdd: '',
            shouldUpdate: true});
    },

    shouldComponentUpdate: function(prevState,nextState) {
        return true;
    },

    componentWillMount: function () {
    },

    componentDidMount:function () {
    },

    componentWillReceiveProps:function () {
    },

    componentWillUpdate:function () {
    },

    componentDidUpdate:function () {
    },

    componentWillUnmount:function () {
    },

    inputText: function(event) {
        this.setState({textToAdd: event.target.value});
    },

    showText: function() {
        this.setProps({showText: !this.props.showText});
    },

    addText: function() {
        var aux = this.state.text.concat(this.state.textToAdd);
        this.setState({text: aux});
    },

    clearContent: function() {
        this.setState({text: ''});
    },

    render: function() {
        return (
            <div>
                <div><span>{this.props.title}</span></div>
                <input type="text" onChange={this.inputText}/>
                <button onClick={this.addText}>Add Text</button>
                <button onClick={this.showText}>Show/Hide Text</button>
                <br />
                <button onClick={this.clearContent}>Clear</button><br />
                {this.props.showText ? <p>{this.state.text}</p> : null}
            </div>
        );
    }
});

var InitialSteps = React.createClass({

    getInitialState: function() {
        return ({component: null});
    },

    showExample1: function() {
        this.setState({component: <Example1 />});
    },

    showExample2: function() {
        this.setState({component: <Example2 msg="Im the example2"/>});
    },

    showExample1and2: function() {
        this.setState({component: <Example1and2 />});
    },

    showExternalExample3: function() {
        this.setState({component: <External title="Children" showText={true}/>});
    },

    renderExample3: function() {
        ReactDOM.render(
            <Example3 title="Parent" showText={true}/>,
            document.getElementById('example3')
        );
    },

    unmountExample3: function () {
        ReactDOM.unmountComponentAtNode(
            document.getElementById('example3'));
    },

    render: function() {
        return (
            <div>
                <div>
                    <button onClick={this.showExample1}>Example1</button>
                    <button onClick={this.showExample2}>Example2</button>
                    <button onClick={this.showExample1and2}>Example1and2</button>
                    <button onClick={this.showExternalExample3}>Example3 as children</button>
                    <button onClick={this.renderExample3}>Example3 as parent</button>
                    <button onClick={this.unmountExample3}>Unmount Example3</button>
                </div>
                <br />
                {this.state.component}
            </div>
        );
    }

});

ReactDOM.render(
    <InitialSteps />,
    document.getElementById('example')
);

