git command: 
git clone: clone code từ repository về local
git pull: pull code mới nhất từ repository về local
git init: khởi tạo working directory
git add <file_name>: thêm file vào vùng staging
git commit -m <message>: commit file
git push: đẩy file commit lên repository
git status: kiểm tra trạng thái
git restore staged <file_name>: đưa file về vùng working directory
git reset HEAD~<so_commit>: reset về commit số chỉ định
git log: kiểm tra log danh sách commit
git branch: kiểm tra danh sách các branch 
git branch <branch_name>: tạo nhánh mới
git checkout <branch_name>: checkout sang nhánh khác
git checkout -b <branch_name>: tạo nhánh mới và checkout sang nhánh đó
git branch -D <branch_name>: xoá nhánh theo tên chỉ định
*Note: luôn pull code về trước khi tạo nhánh mới

.gitignore là file dùng để chỉ định những file untrack bởi Git

convention:
snake_case
kebab-case
camelCase
PascalCase

JavaScript
khai báo biến: var, let, const
array: []
object: {}

condition:
if(condition) {
    execute when condition true
}
else {
    execute when condition false
}

function:
function functionName(parameter) {
    code
}