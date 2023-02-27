const base = {
    get() {
        return {
            url : "http://localhost:8080/djangod56u4/",
            name: "djangod56u4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "python的线上订餐系统"
        } 
    }
}
export default base
