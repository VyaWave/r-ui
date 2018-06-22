import * as React from 'react'

import {
  AirdnbLoading,
  IndicatorLoading,
  ScaleLoading,
  SideBarComponent as SideBar
} from 'components'

import * as Styles from './docs-preview.styl'
const items = [
  {
    name: 'LOADING',
    onClick: () => {
      console.info('hihi')
    }
  },
  {
    name: 'NOTOICE',
    onClick: () => {
      console.info('hihi')
    }
  },
  {
    name: 'DIALOG',
    onClick: () => {
      console.info('hihi')
    }
  },
  {
    name: 'MODAL',
    onClick: () => {
      console.info('hihi')
    }
  }
]

export class DocsPreview extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <header className={Styles['header']}>
          <div className={Styles['logo']} />
          <span className={Styles['name']}> React Ui Components </span>
        </header>
        <div className={Styles['container']}>
          <div className={Styles['sidebarWrap']}>
            <SideBar
              items={items}
              width={160}
              extraClass={Styles['sidebarWrap']}
            />
          </div>
          <div className={Styles['content']}>
            <ScaleLoading />
            <IndicatorLoading />
            <AirdnbLoading />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
