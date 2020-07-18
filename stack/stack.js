/* 
 栈先进后出  lifo  
 它的功能 向栈顶加入元素 向栈顶删除元素 查看栈顶元素 清空元素  栈的大小 栈是否为空

 计算机内存栈
*/

//---------------------------------------------

//函数的两个功能：函数  构造器
//在构造器中this是指向要创建的对象

var Stack = function(){
    var items =[];//私有  外部无法访问
    /* 
    this.items =[];
    公有  new一个出来后 可以通过这个方式对items是 进行操作
    */
   //加入元素
    this.push = function(element){
        items.push(element);
    };
    //删除元素
    this.pop = function(){
        return items.pop();
    };
    //查看栈顶元素
    this.peek = function(){
        return items[items.length-1];
    };
    //查看栈
    this.getItems = function(){
        return items;
    };
    //栈是否为空
    this.isEmpty = function(){
        return items.length == 0;
    },
    //栈的大小
    this.size = function(){
        return items.length;
    }
    //清空栈
    this.clear = function(){
        items = [];
    }

}
//-----------------------------------------------------------------------------------
//prototype原型链

var StackOptimize = function(){
    this.stack = [];//公有
    
};
StackOptimize.prototype.push = function(element){
    this.stack.push(element)
};
StackOptimize.prototype.pop = function(){
    return this.stack.pop();
};
StackOptimize.prototype.peek = function(){
    return this.stack[this.stack.length-1];
};

StackOptimize.prototype.getItems = function(){
    return this.stack;
};

StackOptimize.prototype.clear = function(){
    this.stack = [];
};


//-----------------------------------------------------------------------------------

// 实战   十进制转换二进制

var toBinary = function(num){
    var item = new Stack();
    
    var str = '';
    while(num>0){
        item.push(num%2);
        num = Math.floor(num/2);  
    }
    while(!item.isEmpty()){
        str +=  item.pop();
    }
    return str;
}