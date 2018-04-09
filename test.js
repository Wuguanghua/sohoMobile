getListData = () => {
    console.log('this is a test js~');
    fetch(`http://yapi.demo.qunar.com/mock/5228/record/list`)
      .then(res => {
        return res.json();
      })
      .then(data => {
          console.log('data',data);
          return this.listData = data;
      })
      .catch(e => {
          console.error('|||ERROR|||',e.message);
        }
      );
  };