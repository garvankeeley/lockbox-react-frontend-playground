import React from "react";
import "./App.css";
import LockboxTableView from "../components/LockboxTableView";
import ShowPasswordsButton from "../components/actions/ShowPasswordsButton";
import SearchFilter from "../components/actions/SearchFilter";
import EditItemDialog from "../components/actions/EditItemDialog";

class App extends React.Component {
  state = { showEditItemDialog: false, editingItem: null };

  render() {
    const spacing = 10;
    return (
      <div className="App" style={{ marginTop: spacing, marginLeft: spacing }}>
        <div style={{ marginBottom: spacing }}>
          <SearchFilter style={{ marginRight: spacing }} />
          <button
            className="btn"
            style={{ marginRight: spacing }}
            onClick={() => {
              this.setState({ showEditItemDialog: true });
            }}
          >
            Add Site
          </button>
          <ShowPasswordsButton style={{ marginRight: spacing }} />
        </div>
        <LockboxTableView
          editButtonClicked={item => {
            this.setState({ showEditItemDialog: true, editingItem: item });
          }}
        />

        <EditItemDialog
          isShowing={this.state.showEditItemDialog}
          editingItem={this.state.editingItem}
          onClosed={() =>
            this.setState({ showEditItemDialog: false, editingItem: null })}
        />

      </div>
    );
  }
}

export default App;
