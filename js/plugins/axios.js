import axios from 'https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm'

export default axios.create({
  baseURL: 'https://claromarketingtool.pe/',
  headers: {
    Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWRiODgxMzAwNzM4NTM4ZGUxMmMxNjg5NDRmZWE1OTRkMWQzN2IxMTVhMjQ5MzA0NThmMjFjZDA0ODZiODk2NDEzNDYzYjQ0NmY0MDBiNGIiLCJpYXQiOjE2OTA5OTI3NzcuMzA0NTY3LCJuYmYiOjE2OTA5OTI3NzcuMzA0NTcsImV4cCI6MTcyMjYxNTE3Ny4yOTc3ODQsInN1YiI6IiIsInNjb3BlcyI6W119.p0oZ9MN3bVw43bbRB_qBkWkHyMVfXQE3DEPeyd1rOS9PyAGotEyKUZb1wNwwuu53cAXP7Ex0DnBKNhEWRMBghtARs2KvP3aX8SxicY_QFpBilOjxX4uWRxQtzUS2jT08GhjNKfuiPjHAfMYXvyzl_EQrmllomDyyhoSRmg3vFSYHmvKfkAIy1SsVBBh7oMdsmpjXgH_eQxccUZDogWBdnrRfa3D8becQqyppCY3xno6jmzW-r3fnpuXJZoEgMzVjAIoey9KvUf3cX8IquAZBfPrAIM7EuFvM_yty9Cm3l5fy5C9FodDirc4MPl-Y9lAFeEpS_p010ILPVfqNIq597qANsXDEc1lEWiWbenSKuDEmUMP0j3u5SyMt0bR8IesXbwKc2OGRgW77o8C08s3eDe-U0zR-wlIXSdBy105dj2MoqKabUdYkHlM3iVbENxzfx9cXQjfFeN989fXsX2fvUJZHSLlvAh8TfDRtAscJM-dViDvCIFYe0WG4L9CxnPp5Yb5VRHf0KhEQWSlGtp1leMl84bau5hHGrZTX7vRHP37gW0f257hpZig8YrkTQMUZvXRISky_X37Uz1-5jXDaB36ZlbueS32v6D00H6eOuKBZud-Rf6sMK3ONv38pcUx8OsgBjUIHO23eIuwjSXyuiChFXzP8wO7qGCO9XRbzKjc'
  }
})