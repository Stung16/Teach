#các thuộc tính trong flex-container
    display:flex(kích hoạt flex)
    flex-direction:chọn hướng( thay đổi trục chính)
        +row mặc định
        +row-reverse đảo ngược các item theo trục ngang
        +colum đổi trục ngang thành dọc
        +colum-reverse đảo ngược các item theo trục dọc
    justify-content: căn chỉnh các item theo hướng song song với trục chính
        +flex-start
        +flex-end
        +center: căn giữa theo trục chính
        +space-around căn giữa và khoảng cách 2 lề bằng 1/2  khoảng cách bằng nhau
        +space-beetween căn giữa và khoảng cách 2 lề sát
        +space-evenly giãn đều hết

    align-items: căn chỉnh các item theo hướng vuông góc vs trục chính
        +streth giá trị mặc định chiều sẽ theo chiều cao của container
        +flex-start theo hướng vuông góc với trục chính
        +flex-end theo hướng vuông góc với trục chính
        +center căn ra giữa theo hướng vuông góc vs trục chính

    wrap:độ dài của các phần tử lớn hơn thẻ cha sẽ xuống dòng
        +nowrap
        +wrap
        +wrap-reverse
    
    align-content: căn chỉnh hàng(cột), chỉ áp dụng khi có nhiều hàng hoặc cột
        + flex-start
        + flex-end
        + center:
        + space-around
        + space-beetween
        + space-evenly




#các thuộc tính trong flex-item
    +flex-grow: giãn đều các item để lấp vào chỗ còn trống trong flex-container
                +dkieu p là số nguyên
                +không tỷ lệ khi các item có flex-grow là khác nhau(trình duyệt sẽ tự tính toáns)

    +flex-shrink:1(mặc định): các item sẽ tự động co lại khi không co được nữ=    > vỡ layout
                :0: các item sẽ giữ nguyên kích thước ban đầu không co lại nữa => để giải quyết các bài toán về slide hoặc làm logo trượt

## chỉ nên dùng 1 trong 2
    +flex-basic: là dùng để linh hoạt width và hieght khi đổi trục
        #flex-basic giống witdth nếu flex-dicrection : row
        #flex-basic giống height nếu flex-dicrection : column
        #chặn bởi min-width và max-width khi flex-dicrection:row
        #chặn bởi min-height và max-height khi flex-dicrection:column

    
    +flex:0 1 100px

    +align-self: áp dụng với mọi item để căn chỉnh vị trí





#Tạo bộ đêm
1. khởi tạo bộ đếm mới
counter-reset:tenbodem

2. thực hiện đếm
counter-increment:tenbodem

3. hiển thị giá trị đếm
counter(tenbodem)








transition:làm delay quá trình thay đổi giá trị của 1 thuộc tính css hoặc 1 nhóm css
    +duration: tổng tgian hoàn thành chuyển động
    +property: chọn giá để thay đổi chuyển động
    +delay: sau tgian nhất định sẽ thực hiện quá trình thay đổi chuyển động
    +transition-timing-function:quá trình chuyển động


#ease: chậm nhanh châm
#linear: tốc độ đều
#ease-in: tốc độ tăng dần
#ease-out: tốc độ giảm dần
#ease-in out: chậm nhanh chậm


transform: được sử dụng thay đổi dịnh dạng thẻ html



rotate:xoay
scale:phóng to thu nhỏ
skew:nghiêng
translate:dịch chuyển





# animation

    ##@keyframe:giống như kịch bán chuyển động của hiệu ứng
    ## animation(thuộc tính)
        animation-name:tenkeyframe
        animation-duration:thời gian(s,ms)
        animation-interation-count:số lần chạy || infinity(vô hạn)