// 当整个网页文档加载完毕后执行
document.addEventListener("DOMContentLoaded", () => {
  console.log("林国 (Kybe) 的技术博客已就绪！欢迎访问！");

  // 为 QQ 联系按钮增加点击一键复制交互
  const qqBtn = document.getElementById("qq-btn");
  if (qqBtn) {
    qqBtn.addEventListener("click", () => {
      const qqNumber = "3082194992";
      // 现代浏览器剪贴板 API
      if (navigator.clipboard) {
        navigator.clipboard.writeText(qqNumber).then(() => {
          alert(`QQ 号码 ${qqNumber} 已成功复制到剪贴板！`);
        }).catch(() => {
          alert(`QQ 号码：${qqNumber}`);
        });
      } else {
        alert(`QQ 号码：${qqNumber}`);
      }
    });
  }
});