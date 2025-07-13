// Fetch data from API and set the background image and content
fetch('https://life.upstairs.cn/api/v1/memo?creatorId=106&tag=日常&limit=1')
    .then(response => response.json())
    .then(data => {
        if (data && data.length > 0) {
            var memo = data[0];
            var resourceList = memo.resourceList;
            var content = memo.content; // 假设API返回了memos的内容

            // 移除#号及其后的标签
            content = content.replace(/#[^\s]*/, ''); // 使用正则表达式移除#号及其后的标签
            content = content.replace(/@[^\s]*/, ''); // 使用正则表达式移除@号及其后的标签

            // 格式化时间
            var createdTs = memo.createdTs;
            var formattedDate = moment(createdTs * 1000).twitter(); // 格式化为Twitter样式的时间
            
            if (resourceList && resourceList.length > 0) {
                // 随机选择一张图片
                var randomImage = resourceList[Math.floor(Math.random() * resourceList.length)].externalLink;
                if (randomImage) {
                    // 更改主域名
                    randomImage = randomImage.replace('https://one.upstairs.cn', 'https://photograph.upstairs.cn');
                    document.querySelector('.quote').style.backgroundImage = `url(${randomImage})`;
                }
            }

            var contentElement = document.getElementById('memos');
            // 创建一个包含memos内容的div，并添加class "memos__text"
            var memosTextElement = document.createElement('div');
            memosTextElement.className = 'memos__text';
            memosTextElement.innerHTML = content;
            contentElement.appendChild(memosTextElement);

            // 创建一个包含发布时间的small，并添加class "memos__date"
            var memosDateElement = document.createElement('small');
            memosDateElement.className = 'memos__date';
            memosDateElement.textContent = formattedDate; // 以Twitter样式展示时间
            contentElement.appendChild(memosDateElement);
        }
    })
    .catch(error => console.error('Error fetching memo:', error));
