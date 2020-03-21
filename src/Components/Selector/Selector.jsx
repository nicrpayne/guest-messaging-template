import React from 'react';


class App extends React.Component {
    render() {
        const tabs = [
            {
                label: "Willy",
                component: <DummyComponent content="Willy the whale" />
            },
            {
                label: "Sean",
                component: <DummyComponent content="Sean the snake" />
            },
            {
                label: "Ben",
                component: <DummyComponent content="Ben the bird" />
            }
        ];

        return <TabbedPane tabs={tabs} />;
    }
}

class TabbedPane extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        };

        this.showTab = this.showTab.bind(this);
    }

    showTab(i) {
        this.setState({
            activeTab: i
        });
    }

    render() {
        const active = this.state.activeTab;

        const tabs = this.props.tabs;
        const currentTab = tabs[active];

        return (
            <div className="tabbed-pane">
                <div className="content">{currentTab.component}</div>
                <div className="navigation">
                    <ul>
                        {tabs.map((tab, i) => (
                            <li
                                key={i}
                                className={i === active ? "active" : ""}
                                onClick={() => this.showTab(i)}
                            >
                                {tab.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

class DummyComponent extends React.Component {
    render() {
        return <h1>I am {this.props.content}</h1>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));