import * as React from 'react';
import { OrganizationComponent } from './components/organization';
import { OrgEditComponent } from './components/orgEdit';
import {MembersTableComponent} from './components';

interface Props {
}

interface State {
  orgName : string;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {orgName: 'lemoncode'};
  }

  
    setOrgnameState = (event) => {
        this.setState({orgName: event.target.value});
    }

  public render() {
    return (
      <>
        <OrganizationComponent orgName={this.state.orgName} />
        <OrgEditComponent orgName={this.state.orgName} onChange={this.setOrgnameState} />
        <MembersTableComponent orgName={this.state.orgName} onChange={this.setOrgnameState} />
      </>
    );
  }
}