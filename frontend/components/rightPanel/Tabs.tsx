import React, { Component } from 'react';
import { SchemaContainer } from './SchemaContainer';
// import SchemaModal from './schemaChildren/SchemaModal';
// import { Tab } from './tabsChildren/Tab';

// const { ipcRenderer } = window.require('electron');

type TabsProps = {
  queries: any;
  databaseSize: string;
  submit: Function;
};

type state = {
  show: boolean;
};
export class Tabs extends Component<TabsProps> {
  constructor(props: TabsProps) {
    super(props);
    this.showModal = this.showModal.bind(this);
  }
  state: state = {
    show: false,
  };

  showModal = (event: any) => {
    this.setState({ show: true });
  };

  // componentDidMount() {
  //   // After schema is successfully sent to backend, backend spins up new database with inputted schemaName.
  //   // It will send the frontend an updated variable 'lists' that is an array of updated lists of all the tabs (which is the same
  //   // thing as all the databases). We open a channel to listen for it here inside of componentDidMount, then
  //   // we invoke onClose to close schemaModal ONLY after we are sure that backend has created that channel.
  //   ipcRenderer.on('db-lists', (
  //     event: any,
  //     returnedLists: any /*returnedDbSize: string*/
  //   ) => {
  //     this.setState({
  //       currentSchema: returnedLists,
  //       // databaseSize: returnedDbSize,
  //     });
  //     this.onClose(event);
  //   });
  // }

  onClose = (event: any) => {
    this.setState({ show: false });
  };

  render() {
    const { queries, databaseSize } = this.props;

    return (
      <div className="tabs" id="main-right">
        <ol className="tab-list">
          {/* <span>
            {tabList.map((tab, index) => {
              return (
                <Tab
                  currentSchema={currentSchema}
                  key={index}
                  label={tab}
                  onClickTabItem={onClickTabItem}
                />
              );
            })}
          </span> */}
          <span>
            {/* <button
              id="input-schema-button"
              onClick={(e) => {
                this.showModal(e);
              }}
            >
              +
            </button> */}
          </span>
        </ol>
        {/* <SchemaModal
          tabList={tabList}
          show={this.state.show}
          showModal={this.showModal}
          onClose={this.onClose}
        /> */}
        <div className="tab-content">
          <SchemaContainer
            // key={index}
            queries={this.props.queries}
            submit={this.props.submit}
            databaseSize={databaseSize}
          />
        </div>
      </div>
    );
  }
}
