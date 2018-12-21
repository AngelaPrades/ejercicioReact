import {MemberEntity, createDefaultMemberEntity } from '../model/member';

class MemberAPI {

  // Just return a copy of the mock data
  getAllMembers(organizationName : string) : Promise<MemberEntity[]> {
    const gitHubMembersUrl : string = `https://api.github.com/orgs/${organizationName}/members`;

    return fetch(gitHubMembersUrl)
    .then((response) => this.checkStatus(response))
    .catch(function(){
      let error = new Error(this.response.statusText);
      throw error;
    })
    .then((response) => this.parseJSON(response))
    .catch(function (err) {
      //alert("Error:"+ err.status+" "+err.statusText);
      return Promise.reject(err);
    })
    .then((data) => this.resolveMembers(data))
    .catch(function (err) {
      //alert("Error:"+ err.status+" "+err.statusText);
      return Promise.reject(err);
    })
    }

  private checkStatus(response : Response) : Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      //let error = new Error(response.statusText);
      alert("Error:"+ response.status+" "+response.statusText);
      //throw error;
    }
  }

  private parseJSON(response : Response) : any {
    if(response)
    return response.json();
    else
    return new Error("Not Found");
  }

  private resolveMembers (data : any) : Promise<MemberEntity[]> {

    const members = data.map((gitHubMember) => {
      var member : MemberEntity = createDefaultMemberEntity();

      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatar_url = gitHubMember.avatar_url;

      return member;
    });


    return Promise.resolve(members);
  }
}

export const memberAPI = new MemberAPI();
