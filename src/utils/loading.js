import { ElLoading } from 'element-plus'

const loading = {
  loadingInstance: null,
  open() {
    if (this.loadingInstance == null) {
      this.loadingInstance = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  },
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}
export default loading
