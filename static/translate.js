function toggleDropdown(event) {
    event.stopPropagation();  // 阻止事件冒泡
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

// 点击文档其他地方时关闭下拉菜单
window.onclick = function () {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
    }
};
