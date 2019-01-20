import * as React from 'react';

interface Props {
  orgName : string;
  onChange : (event) => void;
}

export const OrgEditComponent = (props : Props) => 
    <>
      <label>Update oraganization: </label>
      <input value={props.orgName} 
             onChange={props.onChange}
      />
    </>