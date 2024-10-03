
class drive {
  docs = "You can provide keyfile (which is client credentials file from google cloud console project) to getRefreshToken function to get you tokens.js file"+
  "or then you can provide tokens.js file to drive class or provide details mannully like "+
  "{authCred = {client_id:your_client_id ,client_secret:your_client_secret,access_token:your_access_token"
  constructor(authCred){
    this.client_id = authCred.client_id
    this.client_secret = authCred.client_secret
    this.refresh_token = authCred.refresh_token

  }
  enQuery(data) {
    const ret = [];
    for (let d in data) {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
    return ret.join('&');
  }
  async getAccessToken(){
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const post_data = {
      'client_id': this.client_id,
      'client_secret': this.client_secret,
      'refresh_token': this.refresh_token,
      'grant_type': 'refresh_token'
    }

    let requestOption = {
      'method': 'POST',
      'headers': headers,
      'body': this.enQuery(post_data)
    };

    const response = await fetch("https://www.googleapis.com/oauth2/v4/token", requestOption);
    return response.json()
  }
  async download(id,range = 'bytes=0-'){
    const accessDetails = await this.getAccessToken();
    const headers = {'authorization' : 'Bearer ' + accessDetails.access_token}
    const requestOption ={
      'method': "GET",
      'headers': headers,
      'Range':range
    };
    let url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media`;
    let res = await fetch(url, requestOption);
    return res;
  }
}

export { drive }