const menuItems = document.querySelectorAll(".menu-left a");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

const products = document.querySelectorAll(".product-card");

products.forEach(p => {
    p.addEventListener("click", () => {
        alert("Bạn đã chọn: " + p.querySelector("h6").innerText);
    });
});

//Chart
const ctxLine = document.getElementById('revenueChart').getContext('2d');
  new Chart(ctxLine, {
    type: 'bar',
    data: {
      labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
      datasets: [{
        label: 'Doanh thu (VNĐ)',
        data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
        borderColor: '#198754',
        tension: 0.3,
        fill: true,
        backgroundColor: 'rgba(25, 135, 84, 0.1)',
      }]
    }
  })

  const ctxPie = document.getElementById('categoryPieChart').getContext('2d');
  new Chart(ctxPie, {
    type:'pie',
    data:{
        labels: ['Cà phê', 'Trà sữa', 'Nước trái cây'],
        datasets: [{
            data:[45, 35, 20],
            backgroundColor: ['#6f4e37', '#ffc107', '#28a745'],
        }]
    }
  })
