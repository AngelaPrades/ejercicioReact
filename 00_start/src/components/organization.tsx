import * as React from 'react';

interface Props {
    orgName: string;
}

export const OrganizationComponent = (props: Props) => (
    <h1>Current organization: { props.orgName }</h1>
);