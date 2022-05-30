<template>
    
    <NuxtLayout name="default">
        <div>
            {{name}}<input type="text" v-model="name">{{ data.name }}

            <NuxtLink to="/user-admin/1">动态路由</NuxtLink>
            <span>|</span>
            <NuxtLink to="/parent/child">嵌套路由</NuxtLink>
        </div>

        <button @click="counter++">+</button>
        <div>{{counter}}</div>
        <button @click="counter--">-</button>
        <div>{{ $hello() }}</div>

        <div>{{ store.count }}</div>
        <button @click="store.setCount">+</button>
        <button @click="store.$patch({ count: store.count - 1 })">-</button>
    </NuxtLayout>
</template>

<script lang="ts" setup>
    import { useStore } from "../store/counter"

    // const cookie = useCookie('Admin-Token')

    const store = useStore()
    definePageMeta({
        layout: false,
    }); 
    const show = ref(false)
    // useAsyncData
    // const { data } = await useAsyncData('count', () => $fetch('/api/count'))

    // useFetch 是对 useAsyncData 的封装
    const { data } = await useFetch("/api/count", {
        // pick 过滤掉没用的属性
        // pick: ['name']
        transform(input) {
            return input
        }
    })

    const name = ref('hello world')

    const counter = useCounter()

    const { $hello } = useNuxtApp()
</script>