<template>
    <Form ref="loginForm" >
        <FormItem prop="userName">
            <Input placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" long>登录</Button>
        </FormItem>
    </Form>
</template>

<script>
    export default {
        name: "loginForm"
    }
</script>

<style scoped>

</style>
