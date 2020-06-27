/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
  // 存储值 ()
  setItem(key:string, value:string, module_name?:string) {
    if (module_name){
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    }else{
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取某一个模块下面的属性user下面的userName
  getItem(key:string, module_name?:string) {
    if (module_name){
      let val:{} = this.getItem(module_name);
      if(val) return val[key];
    }
    return this.getStorage()[key];
  },
  // 获取全部的值
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear(key:string, module_name:string) {
    let val = this.getStorage();
    if (module_name){
      if (!val[module_name])return;
      delete val[module_name][key];
    }else{
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}