import Bar from './bar'
import { Component } from 'react';
import './visualizer.css'



 
class Visualizer extends Component{

    constructor(props){
      const randNums =[];
      for(let i = 0; i<75; i++){
        let num = Math.floor(Math.random()*400)
        randNums.push(num) 
    }
        super(props)
        this.state = {randNums : randNums, isDisabled : false, color:Array.from({length:100}, () => 'turquoise')}
        this.bubbleSort = this.bubbleSort.bind(this)
        this.insertionSort = this.insertionSort.bind(this)
        this.shuffle = this.shuffle.bind(this)
        this.selectionSort = this.selectionSort.bind(this)
        this.quickSort= this.quickSort.bind(this)
        this.partition = this.partition.bind(this)
        this.swap = this.swap.bind(this)
        
    }
    sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
    }
    async selectionSort()
    {
      this.setState({
        isDisabled: true
      })
      let arr = [...this.state.randNums];
      let i, j, min_idx, n = this.state.randNums.length;
      let {color} = this.state
    // One by one move boundary of unsorted subarray
      for (i = 0; i < n-1; i++)
      {
        // Find the minimum element in unsorted array
        
        min_idx = i;
        for (j = i + 1; j < n; j++){
          let oldd = color[j];  
          color[j] = '#F7DE3A';
            
            this.setState({
              randNums: arr, color
            })
            color[j] = oldd;
            await this.sleep(50)
            if (arr[j] < arr[min_idx]){
              color[min_idx] = 'turquoise';
              this.setState({
                randNums: arr, color
              })
              await this.sleep(50)
              min_idx = j;
              color[j] = '#FF033E';
              this.setState({
                randNums: arr, color
              })
              await this.sleep(50)
            }
          }
        // Swap the found minimum element with the first element

        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
        color[min_idx] = 'turquoise'
        color[i] = '#4bc52e'
        
        this.setState({
          randNums: arr, color
        })
        
        await this.sleep(50)
      }
      this.setState({
        randNums: arr, color
      })
      this.setState({
        isDisabled: false
      })
      console.log(arr)
    }





    
    merge = async (arr, l, m, r) => {
      let { color } = this.state
      for(let i=l;i<=m;i++)
      {color[i] = '#F7DE3A'
      this.setState({color})

      await this.sleep(20)
     

    }

      for(let i=m+1;i<=r;i++)
      {color[i] = '#F7DE3A'
      this.setState({color})

      await this.sleep(10)
      }
      var n1 = m - l + 1;
      var n2 = r - m;
      var L = new Array(n1); 
      var R = new Array(n2);
      for (var i = 0; i < n1; i++)
          L[i] = arr[l + i];
      for (var j = 0; j < n2; j++)
          R[j] = arr[m + 1 + j];

      i = 0;
      j = 0;
      var k = l;
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          }
          else {
              arr[k] = R[j];
              j++;
          }
          k++;    
          await this.sleep(50) 
          this.setState({randnums:arr})   
      }
      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
          await this.sleep(50)
          this.setState({randnums:arr})
      }
      while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
          await this.sleep(50)
          this.setState({randnums:arr})
      }
      for(let i=l;i<=r;i++)
      {color[i] = '#4bc52e'
      this.setState({color})

      await this.sleep(20)
      this.setState({randnums: arr})}
  }

  mergeSort = async (arr,l, r) => {
    if(l === 0 && r === this.state.randNums.length-1){
      this.setState({
        isDisabled: true
      })
    }
    // this.setState({
    //   isDisabled: true
    // })
      if(l<r) {
      let { color } = this.state
      var m =l+ parseInt((r-l)/2);
      color[m] = '#FF033E'

      await this.mergeSort(arr,l,m);
      for(let i=l;i<=m;i++)
      color[i] = '#4bc52e'

      this.setState({color})
      
      await this.mergeSort(arr,m+1,r);
      for(let i=m;i<=r;i++)
      color[i] = '#4bc52e'

      this.setState({color})

      await this.sleep(10)
      this.setState({randnums: arr})

      await this.merge(arr,l,m,r);
      if(l === 0 && r === this.state.randNums.length-1){
        this.setState({
          isDisabled: false
        })
      }
      }       
  }
    

    async insertionSort() 
    {  this.setState({
      isDisabled: true
    })
      const arr = [...this.state.randNums];
      const {color} = this.state
      let n =this.state.randNums.length, i, j; 
      for (i = 1; i < n; i++) {
        j = i;
 
        // Insert arr[i] into list 0..i-1
        while (j > 0 && arr[j] < arr[j - 1]) {
 
            let old = color[j-1]
            color[j] = '#FF033E'
            this.setState({randNums: arr, color})
            await this.sleep(60)
            color[j] = old
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            old = color[j-1]
            color[j-1] = '#FF033E'
            this.setState({randNums: arr, color})
            await this.sleep(60)
            color[j-1] = old
            j -= 1;
        }
        color[i-1] = '#F7DE3A'
        
    }
      for(let i= 0;i<arr.length;i++){
        color[i] = '#4bc52e'
        this.setState({randNums : arr})
        await this.sleep(10)
      }
      
      this.setState({randNums : arr, isDisabled: false})
      console.log(this.state.randNums, arr)
    } 
    async bubbleSort(){
      this.setState({
        isDisabled: true
      })
        const arr = [...this.state.randNums];
        const {color} = this.state
        for(var i = 0; i < this.state.randNums.length; i++){
            
          // Last i elements are already in place  
          for(var j = 0; j < ( this.state.randNums.length - i -1 ); j++){
            
            
           
            await this.sleep(10)
            if(arr[j] > arr[j+1]){ 
              color[j] = '#F7DE3A';
              color[j+1] = '#F7DE3A';
              this.setState({randNums : arr, color})
              color[j] = 'turquoise';
              color[j+1] = 'turquoise';
              var temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j+1] = temp
            }
            
          }
          color[j] = '#4bc52e';
          
        }
        this.setState({randNums : arr, isDisabled: false})
        console.log(this.state.randNums, arr)
    }
  async shuffle(){
    
    let shufflearr=[]
    let {color} = this.state
    for(let i = 0; i< this.state.randNums.length; i++){
      let num = Math.floor(Math.random()*400)
      this.setState({
        isDisabled: false
      })
      color[i] = '#192734'
      
      shufflearr.push(num)
    }
    this.setState({
      randNums: shufflearr
    })
    for(let i=0;i<this.state.randNums.length;i++){
      color[i] = 'turquoise'
      this.setState({
        randNums: shufflearr
      })
      await this.sleep(12)
    }
  }

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
async partition(arr, low, high) {
    let { color } = this.state
    let pivot = arr[high];
    //color[high] = '#d3cfd4'
    this.setState({color})
    await this.sleep(50)

    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
 
        if (arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            this.setState({nums: arr})
            await this.sleep(50)
        }
        
    }

    this.swap(arr, i + 1, high);
    // color[i+1] = '#00ff91'
    // color[high] = '#00acee'
    this.setState({nums: arr, color})
    await this.sleep(50)

    return (i + 1);
}
 
async quickSort(arr, low, high) {
    if (low < high) {

        let { color } = this.state
        let pi = await this.partition(arr, low, high);
        color[pi] = '#FF033E'
        await this.quickSort(arr, low, pi - 1);
        for(let i=low;i<=pi-1;i++)
        {color[i] = '#F7DE3A';
        this.setState({color})
        await this.sleep(50)}

        await this.quickSort(arr, pi + 1, high);
        for(let i=pi+1;i<=high;i++)
        {color[i] = '#F7DE3A'
        this.setState({color})
        await this.sleep(50)}

        for(let i=low;i<=high;i++){
          color[i] = '#4bc52e'
        this.setState({color})
        await this.sleep(50)
        }
    }
}


  render(){
    
      return(
        <div className="Visualizer">
            <div className='Control'>
                
                  
                <a className='name'>SORTING VISUALIZER</a>
                <button style={this.state.isDisabled?{ cursor : 'not-allowed'}:{}} className='button-bubble' disabled={this.state.isDisabled} onClick={this.bubbleSort}>BubbleSort</button>
                <button style={this.state.isDisabled?{ cursor : 'not-allowed'}:{}} className='button-insertion' disabled={this.state.isDisabled} onClick={this.insertionSort}>InsertionSort</button>
                <button style={this.state.isDisabled?{ cursor : 'not-allowed'}:{}} className='button-merge' disabled={this.state.isDisabled} onClick={()=>this.mergeSort(this.state.randNums, 0, this.state.randNums.length -1)}>MergeSort</button>
                <button style={this.state.isDisabled?{ cursor : 'not-allowed'}:{}} className='button-quick' disabled={this.state.isDisabled} onClick={()=>this.quickSort(this.state.randNums, 0, this.state.randNums.length -1)}>QuickSort</button>
                <button style={this.state.isDisabled?{ cursor : 'not-allowed'}:{}} className='button-selection' disabled={this.state.isDisabled} onClick={this.selectionSort}>SelectionSort</button>
            </div>
            <div className='Box'>
                {this.state.randNums.map((name, id) => (  
                <Bar height={name}  
                backgroundColor={this.state.color[id]}/>))}
            </div>
            <button disabled={this.state.isDisabled} style={this.state.isDisabled?{ cursor : 'not-allowed'}:{}} className='shuffle' onClick={this.shuffle} >Shuffle the list</button>
            <div className='copyrights'>CopyRights © 2022, Atharva Karandikar</div>
        </div>
      )
  } 
}

export default Visualizer;
