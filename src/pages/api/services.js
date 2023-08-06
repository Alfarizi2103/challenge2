import api from ".";

const ENDPOINT = {
    ACCOUNT: '/accounts'
}

const getAllAccount = async() => {
    try {
        const res = await api.get(ENDPOINT.ACCOUNT)
        console.log(res)
        return res;
    } catch (error) {
        throw Error(error)
    }
}

const getSelectedAccount = async (slug) => {
    try {
      const response = await api.get(`${ENDPOINT.ACCOUNT}?filters[slug][$eqi]=${slug}&populate=*`);
      return response;
    } catch (error) {
      throw Error(error);
    }
  
  };

export {getAllAccount, getSelectedAccount}