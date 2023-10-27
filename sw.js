/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/09/10/工具/03.Vscode&Docker/VScode连接远程服务器的docker容器/index.html","2e85c0547d0a2a463b758e72ab6253b0"],["/2021/10/27/工具/03.Vscode&Docker/本地文件与服务器，本地文件与docker镜像的拷贝/index.html","f06730954885c6ba190bdce7f3ce1c0c"],["/2023/02/24/论文阅读/『论文笔记』心脏手术后AKI急性肾损伤/index.html","01c5e0b6907123675e98121f7344f3db"],["/2023/07/07/论文阅读/『论文笔记』DragGan：基于Gan的交互式图像处理方法/index.html","54557400c3d6e75390ab3bf8d426b4c3"],["/2023/08/11/论文阅读/『论文笔记』语言模型的全面评估/index.html","9c48787caf582d6775c795e895c8bb18"],["/2023/09/21/工具/03.Vscode&Docker/Vscode误删容器内文件，如何找回/index.html","35264b5aa68d079314a241060fec98bf"],["/2023/10/17/工具/02.笔记工具/小破站毛胚房入住装修日记/index.html","38be5cc9798b055d5302e6f3b71e6e57"],["/2023/10/17/项目学习/[项目学习]PyHealth-临床预测建模的深度学习工具箱/index.html","495e7f76cc27a70850b725b0adb3aa74"],["/2023/10/23/工具/02.笔记工具/『obsidian』Mermaid绘图/index.html","7449492dd783c97632c9f1f5518fd722"],["/2023/10/23/工具/03.Vscode&Docker/Git：Github分支和本地分支互通/index.html","300b0104aea5b2bbd13bd437a6f180c4"],["/2023/10/26/学习笔记/软件工程导论/01_软件工程学概述/index.html","487192fe621dfaf6e5dda6595b38de0d"],["/archives/2021/09/index.html","dc02bc055218d12182da312dfc0da12a"],["/archives/2021/10/index.html","ff7273254d18d37d61a14782404a2dd2"],["/archives/2021/index.html","389f44f37c46da89b3d5defe1a6a5b2e"],["/archives/2023/02/index.html","e6db98eb59baa68e5417d89f28385839"],["/archives/2023/07/index.html","17fcbf85dec6e8271af4c0b9c1f39819"],["/archives/2023/08/index.html","01b5f593c30786e1c540a7b33f54df0e"],["/archives/2023/09/index.html","b4e0bb9aa4e67f3b4b59ca5f369132eb"],["/archives/2023/10/index.html","023962d3ad9a51e510a9537ec2c09a10"],["/archives/2023/index.html","36f1a7e4a46f0fdfbff3849a196bd3f8"],["/archives/index.html","47e6f0c90c1400dafa2fd60e6aea8f75"],["/archives/page/2/index.html","a6bceac3c004bdf2607a1c2e0311f296"],["/baidu_verify_codeva-XDbgaIn1kE.html","9abd63a46901a4a65382296298b77d77"],["/categories/index.html","1fb3422143ee8513749edfe58492646b"],["/categories/paper-reading/index.html","18e4011fab358b2a6267b24704918900"],["/categories/project-learning/index.html","2af9c415eaea279bf6d411b5f46e09d4"],["/categories/学习笔记/index.html","c0807f600afcf8a52aa0c36ab16d66bc"],["/categories/学习笔记/软件工程导论/index.html","a721fe2d104358c417a891f6bf508d06"],["/categories/工具/index.html","3617a3fde8b13e4d73564fb1c16b2a35"],["/css/index.css","cb3d9d88125b9b4284d8474b200e7c1f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/GitHub.png","027aa5b6511c728028e941df348968c9"],["/img/avatar.jpg","238c5b65c55bca9ca7686986dc405ac2"],["/img/background.jpg","f242c89a54b928372291011acd94b38d"],["/img/background1.jpg","46e6b45bf977458785748119f6405388"],["/img/favicon.jpg","a28b19535fb4b2e295d07c65c3683a92"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/nav1.jpg","f8017755b6dac02fc06021c517fe0878"],["/img/nav2.jpg","84db47940af1556f8fc4eb0d01c7b24d"],["/index.html","a1d7302283faa1ae474507ab2f68503a"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","8488b6ff523d6e7769dfe17b9b70620c"],["/page/2/index.html","a13f8c171f863ca65cdbf413ebc66e89"],["/sw-register.js","bf75c704966a4e93c8c9f95ffb2dee36"],["/tags/TODO/index.html","2460ce414fdf678646d930ca6b4cd208"],["/tags/docker/index.html","b8e9aa686e4e8c4e9f4c67ba9ef9c6d2"],["/tags/hexo/index.html","10b13814fd3f75067a793985a108f71a"],["/tags/index.html","4f54db78d84ee9e0713b446da6ff1120"],["/tags/obsidian/index.html","25400e848890ecfdbeca129443d47ea8"],["/tags/vscode/index.html","5df4ddb84822dd13a2393f752b8fe1a5"],["/tags/医疗/index.html","abd0d7f3de94c2e853ed546101483640"],["/tags/学习日记/index.html","807d32f39ca4d9210912c4136f4c6fb9"],["/tags/技术/index.html","714bb7c3d56b1d7161df827b3d42e47b"],["/tags/软件危机/index.html","b7a527da385d8885ad9d33f7c60b1b44"],["/tags/软件工程/index.html","8dd52229dd7fcabc061e0cefc50a8cb0"],["/tags/问题/index.html","2c15db70b14b7d74d3085d8b87fa1d08"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
