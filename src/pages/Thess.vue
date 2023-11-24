<template>
    <div class="container campus">
        <ul class="China_honest">
            <li>中国共产党全体党员和各级党员领导干部必须坚定共产主义理想和中国特色社会主义信念，必须坚持全心全意为人民服务根本宗旨，必须继承发扬党的优良传统和作风，必须自觉培养高尚道德情操，努力弘扬中华民族传统美德，廉洁自律，接受监督，永葆党的先进性和纯洁性。</li>
        </ul>
        <ul class="msjyzwl">
            <li>第一条 坚持公私分明，先公后私，克己奉公。</li>
            <li>第二条 坚持崇廉拒腐，清白做人，干净做事。</li>
            <li>第三条 坚持尚俭戒奢，艰苦朴素，勤俭节约。</li>
            <li>第四条 坚持吃苦在前，享受在后，甘于奉献。</li>
        </ul>
        <video controls muted loop class="vido">
            <source src="../assets/mp4/WeChat_20231122091418.mp4" type="video/webm"/>
        </video>
    </div>
</template>
<style>
*{
    margin: 0;
    padding: 0;
}
.campus{
    width: 100vw;
    height: 100vh;
    display: flex;
    background-image: url('../assets/img/bg.png');
    background-size: 100% 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    
} 
.msjyzwl li{
    font-size: 20px;
}
li{
    list-style: none;
}
.China_honest{
    width: 85vw;
    height: 300px;
    font-size: 20px;
    display: flex;
    padding: 15px;
    font-weight: boldl;
   
}
.vido{
    width: 960px;
    height: 540px;
    display: flex;
    padding: 15px;
}
</style>