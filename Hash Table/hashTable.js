class HashTable{
    constructor(size=6){
        this.table=new Array(size)
    }
    hash(key){
        let total=0
        for(let char of key){
            total+=char.charCodeAt(0)
        }
        return total % this.table.length
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            console.log(i,this.table[i])
        }
    }
    set(key,value){
        let index=this.hash(key)
        if(!this.table[index]) this.table[index]=[]
        this.table[index].push([key,value])
    }
    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket) return undefined
        for(let pair of bucket){
            if(pair[0]===key) return pair[1]
        }
        return undefined
    }
    update(key,newValue){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket) return false
        for(let pair of bucket){
            if(pair[0]===key){
                pair[1]=newValue
                return
            }
        }
        return false
    }
    delete(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket) return false
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key) {
                bucket.splice(i,1)
                if(bucket.length===0){
                    this.table[index]=undefined
                }
                return true
            }
        }
        return false
    }


}



const hs=new HashTable()
hs.set("name", "John Doe");
hs.set("age", 29);
hs.set("city", "Kochi");``
hs.set("country", "India");
hs.set("capital", "New Delhi");
hs.display()
console.log("Getting value:-",hs.get("country"))
hs.update('country',"INDIA")
console.log("Getting updated value:-",hs.get("country"))
hs.delete('country')
console.log("After deleting")
hs.display()