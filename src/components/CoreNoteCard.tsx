import './CoreNoteCard.less'
import { Grid } from 'antd-mobile'
const CoreNoteCard = () => {
  return <div className={'core-note-card'}>
      <p className={'today-date'}>06/11</p>
      <Grid columns={24} style={{margin:'10px 10px'}}>
          <Grid.Item span={12}>
              星期六 农历 五月十三
          </Grid.Item>
          <Grid.Item span={10} style={{textAlign:'right'}}>
              壬寅
          </Grid.Item>
      </Grid>


      <div className={'bg-area'}>

          <div className={'top'}>
              <p className={'title'}>以开怀</p>
              <p className={'content'}>有啊沙发素hi发噶司法嘎斯覆盖苏公有啊沙发素hi发噶司法嘎斯覆盖苏公有啊沙发素hi发噶司法嘎斯覆盖苏公有啊沙发素hi发噶司法嘎斯覆盖苏公有啊沙发素hi发噶司法嘎斯覆盖苏公</p>

              <p className={'reference'}>《侧面》</p>
          </div>


          <div className={'bottom'}>
              <p className={'author'}>作家，小红帽</p>
          </div>

      </div>
  </div>
}

export default CoreNoteCard
