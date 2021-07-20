$(function(){
    let namenode = $(".product-name")
    let pricenode = $(".product-price")

    // Search Bar Logic
    $("#search").keyup(function(){
        let sval = $(this).val().toLowerCase()
        
        for(let i=0;i<namenode.length;i++){
            let nh=$(namenode[i]).html().toLowerCase()
            if(!nh.includes(sval)){
                let pid=$(namenode[i]).parent().attr("id")
                $(namenode[i]).parent().attr("id",pid).css("display","none")
            }
            else if(nh.includes(sval)){
                let pid=$(namenode[i]).parent().attr("id")
                $(namenode[i]).parent().attr("id",pid).css("display","block")
            }
        }
    })

    //Filter Logic
    $("#filter").change(function(){
        if($(this).val()=="A"){
            let l=[]
            for(let i=0;i<namenode.length;i++){
                l.push($(namenode[i]).html())
            }
            l.sort()
            for(let i=0;i<namenode.length;i++){
                o=l.indexOf($(namenode[i]).html())
                let pid=$(namenode[i]).parent().attr("id")
                $(namenode[i]).parent().attr("id",pid).css("order",o)
            }
        }
        else if($(this).val()=="Z"){
            let l=[]
            for(let i=0;i<namenode.length;i++){
                l.push($(namenode[i]).html())
            }
            l.reverse()
            for(let i=0;i<namenode.length;i++){
                o=l.indexOf($(namenode[i]).html())
                let pid=$(namenode[i]).parent().attr("id")
                $(namenode[i]).parent().attr("id",pid).css("order",o)
            }
        }
        else if($(this).val()=="low"){
            let l=[]
            for(let i=0;i<pricenode.length;i++){
                l.push(parseInt($(pricenode[i]).html()))
            }
            l.sort((a, b)=>a-b)
            for(let i=0;i<pricenode.length;i++){
                o=l.indexOf(parseInt($(pricenode[i]).html()))
                let pid=$(pricenode[i]).parent().attr("id")
                $(pricenode[i]).parent().attr("id",pid).css("order",o)
            }
        }
        else if($(this).val()=="high"){
            let l=[]
            for(let i=0;i<pricenode.length;i++){
                l.push(parseInt($(pricenode[i]).html()))
            }
            l.sort((a, b)=>b-a)
            for(let i=0;i<pricenode.length;i++){
                o=l.indexOf(parseInt($(pricenode[i]).html()))
                let pid=$(pricenode[i]).parent().attr("id")
                $(pricenode[i]).parent().attr("id",pid).css("order",o)
            }
        }
        else if($(this).val()=="none"){
            let l=[]
            for(let i=0;i<pricenode.length;i++){
                l.push(parseInt($(pricenode[i]).html()))
            }
            for(let i=0;i<pricenode.length;i++){
                o=l.indexOf(parseInt($(pricenode[i]).html()))
                let pid=$(pricenode[i]).parent().attr("id")
                $(pricenode[i]).parent().attr("id",pid).css("order",o)
            }
        }
    })
})