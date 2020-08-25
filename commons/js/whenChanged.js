export default function(d){
    let old = new Date(d);
    let now = new Date();

    //获取Old具体时间
    let oyear=old.getFullYear();
    let omonth=old.getMonth();
    let oday=old.getDate();
    let oh=old.getHours();
    let om=old.getMinutes();

    //获取now具体时间
    let year=now.getFullYear();
    let month=now.getMonth();
    let day=now.getDate();
    let h=now.getHours();
    let m=now.getMinutes();

    if(oday === day && omonth === month && oyear === year){
        if(oh < 10){
            oh = '0' + oh;
        }
        if(om < 10){
            om = '0' + om;
        }
        let showTime = oh + ':' + om;
		return showTime
    }
}